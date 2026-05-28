"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType<any>;
    color?: string;
  };
};

const ChartContext = React.createContext<{
  config: ChartConfig;
} | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within ChartContainer");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ReactNode;
  }
>(({ className, children, config, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        className={cn("w-full h-full", className)}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>
          {children as any}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});

ChartContainer.displayName = "ChartContainer";

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  any
>(
  (
    {
      active,
      payload,
      className,
    },
    ref,
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-background p-2 shadow-md",
          className,
        )}
      >
        {payload.map((item: any, index: number) => {
          const itemConfig =
            config[item.dataKey] || {};

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <span>
                {itemConfig.label || item.name}
              </span>

              <span className="font-medium">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
);

ChartTooltipContent.displayName =
  "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend;

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
};