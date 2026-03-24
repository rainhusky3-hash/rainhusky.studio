import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

export default function AdminLogin() {
  const { user, isAdmin, signIn, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const { error: err } = await signIn(email, password);
    setIsLoading(false);
    if (err) {
      setError(err);
    } else {
      navigate("/");
    }
  };

  if (user) {
    return (
      <Layout>
        <SEOHead title="Admin" description="Admin panel" />
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-md text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              {isAdmin ? "Admin Logged In" : "Not Authorized"}
            </h1>
            <p className="text-muted-foreground mb-6">
              {isAdmin
                ? "You can now manage artwork across the site."
                : "Your account does not have admin privileges."}
            </p>
            <Button onClick={signOut} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title="Admin Login" description="Admin login" />
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-md">
          <h1 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-card border-border"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
