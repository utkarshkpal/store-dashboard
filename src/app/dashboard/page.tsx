import { Card, CardContent } from "@/components/ui/card";
import Insights from "./insights";
import Orders from "./orders";
import Stats from "./stats";

export default function Dashboard() {
  return (
    <div className="px-10 py-9">
      <Card>
        <CardContent className="px-6 py-8">
          <Stats />
          <Insights />
          <Orders />
        </CardContent>
      </Card>
    </div>
  );
}
