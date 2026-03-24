
-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function for role checks
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS: authenticated users can read their own roles
CREATE POLICY "Users can read own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create artwork_slots table for mapping slot keys to image URLs
CREATE TABLE public.artwork_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_key TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.artwork_slots ENABLE ROW LEVEL SECURITY;

-- Public can read all artwork slots
CREATE POLICY "Anyone can view artwork slots"
  ON public.artwork_slots FOR SELECT
  USING (true);

-- Only admins can insert
CREATE POLICY "Admins can insert artwork slots"
  ON public.artwork_slots FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can update
CREATE POLICY "Admins can update artwork slots"
  ON public.artwork_slots FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete
CREATE POLICY "Admins can delete artwork slots"
  ON public.artwork_slots FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_artwork_slots_updated_at
  BEFORE UPDATE ON public.artwork_slots
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for artwork
INSERT INTO storage.buckets (id, name, public)
VALUES ('artwork', 'artwork', true);

-- Storage policies: public read, admin write
CREATE POLICY "Public can view artwork"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'artwork');

CREATE POLICY "Admins can upload artwork"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'artwork' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update artwork"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'artwork' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete artwork"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'artwork' AND public.has_role(auth.uid(), 'admin'));
