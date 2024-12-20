import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import mockedForecasts from "./mock";

export default function Insights() {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-medium">Insights</h1>
      <div className="mt-12 flex flex-col md:flex-row gap-6">
        <Card className="flex-[2] p-6">
          <CardHeader className="p-0">
            <CardTitle className="flex gap-2">
              <Image
                src={`/icons/consultations.svg`}
                alt="Consultations"
                width={9.38}
                height={9.38}
              />
              <h2 className="text-xs font-semibold leading-8 tracking-wider text-gray ">
                CONSULTATIONS
              </h2>
            </CardTitle>
            <CardContent className="p-0 mt-2 flex justify-center items-center">
              <Image
                src={`/images/mixed-graph.png`}
                alt="Consultations"
                width={636}
                height={353}
              />
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="flex-[1]  p-6">
          <CardHeader className="p-0">
            <CardTitle className="flex gap-2">
              <Image
                src={`/icons/bar-graph.svg`}
                alt="VS Past Period"
                width={9.38}
                height={9.38}
              />
              <h2 className="text-xs font-semibold leading-8 tracking-wider text-gray ">
                VS PAST PERIOD
              </h2>
            </CardTitle>
            <CardContent className="p-0 mt-2 flex justify-center items-center">
              <Image
                src={`/images/bar-graph.png`}
                alt="VS Past Period"
                width={212}
                height={353}
              />
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="flex-[1] p-6 bg-custom-gradient">
          <CardHeader className="p-0">
            <CardTitle className="flex gap-2">
              <Image
                src={`/icons/chat.svg`}
                alt="Forecasts"
                width={9.38}
                height={9.38}
              />
              <h2 className="text-xs font-semibold leading-8 tracking-wider text-brandlight ">
                FORECASTS
              </h2>
            </CardTitle>
            <CardContent className="p-0 mt-2 flex flex-col gap-2">
              {mockedForecasts.map((forecast) => (
                <div key={forecast.id}>
                  <div className="flex gap-2 justify-between">
                    <p className="text-[56px] font-medium text-brandlight">
                      +{forecast.percentageIncrease}%
                    </p>
                    <div className="flex items-center h-[35px]">
                      <Image
                        src={`/icons/arrow-top-right.svg`}
                        alt="Arrow Up"
                        className="text-start"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                  <p className="text-xs font-medium text-brandlight">
                    {forecast.content}
                  </p>
                </div>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
