import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import mockedStats, { StatType } from "./mock";

export default function Stats() {
  const renderStat = (stat: StatType) => {
    const hasIncrease = stat.percentageChange > 0;
    const changeColor = hasIncrease ? "text-green-500" : "text-red-500";
    return (
      <Card key={stat.id} className="flex flex-col p-6">
        <CardHeader className="p-0">
          <CardTitle className="flex gap-2">
            <Image
              src={`/icons/${stat.icon}.svg`}
              alt={stat.label}
              width={9.38}
              height={9.38}
            />
            <h2 className="text-xs font-semibold leading-8 tracking-wider text-gray ">
              {stat.label.toUpperCase()}
            </h2>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 mt-2">
          <p className="text-2xl font-medium ">{stat.valueLabel}</p>
          <div className="flex gap-2 items-end">
            <Image
              src={
                hasIncrease ? "/icons/trend-up.svg" : "/icons/trend-down.svg"
              }
              alt={stat.label}
              width={21}
              height={13.5}
            />
            <p className={`text-sm mt-2 ${changeColor}`}>
              {Math.abs(stat.percentageChange)}%{" "}
            </p>
            <p className="text-sm">{hasIncrease ? "increase" : "decrease"}</p>
          </div>
        </CardContent>
      </Card>
    );
  };
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">At Glance</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockedStats.map((stat) => renderStat(stat))}
      </div>
    </section>
  );
}
