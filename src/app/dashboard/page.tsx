import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Orders from "./orders";
import Stats from "./stats";

export default function Dashboard() {
  return (
    <div>
      <Button>Button</Button>
      <div className="px-10 py-9">
        <Card>
          <CardContent className="px-6 py-8">
            <Stats />
            <Orders />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
