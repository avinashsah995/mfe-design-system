import { useState, type ReactNode } from "react";
import { Moon, ShoppingCart, Sun, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

const buttonSizes = ["xs", "sm", "default", "lg"] as const;

const badgeVariants = [
  "default",
  "secondary",
  "outline",
  "destructive",
  "ghost",
] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        {children}
      </CardContent>
    </Card>
  );
}

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : undefined}>
      <div className="min-h-svh bg-background text-foreground">
        <header className="border-b bg-card">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
            <div>
              <h1 className="text-lg font-semibold">NovaMart Design System</h1>
              <p className="text-sm text-muted-foreground">
                Shared primitives for the micro frontends
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setDark((value) => !value)}
            >
              {dark ? <Sun /> : <Moon />}
            </Button>
          </div>
        </header>

        <main className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8">
          <Section title="Buttons" description="Variants share the primary blue accent.">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </Section>

          <Section title="Button sizes" description="From compact toolbars to primary calls to action.">
            {buttonSizes.map((size) => (
              <Button key={size} size={size}>
                {size}
              </Button>
            ))}
            <Button size="icon" aria-label="Add to cart">
              <ShoppingCart />
            </Button>
            <Button variant="destructive" size="icon" aria-label="Remove item">
              <Trash2 />
            </Button>
          </Section>

          <Section title="Badges" description="Used for statuses and counters.">
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </Section>

          <Card>
            <CardHeader>
              <CardTitle>Form controls</CardTitle>
              <CardDescription>
                Inputs and labels inherit the shared focus ring.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@novamart.dev" />
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <Label htmlFor="coupon">Coupon code</Label>
                <Input id="coupon" placeholder="NOVA10" aria-invalid />
                <p className="text-sm text-destructive">
                  That coupon has expired.
                </p>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button>Apply</Button>
              <Button variant="ghost">Cancel</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}

export default App;
