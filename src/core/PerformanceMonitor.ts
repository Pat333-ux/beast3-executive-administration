export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  status: "healthy" | "warning" | "critical";
}

export class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];

  addMetric(name: string, value: number, target: number): PerformanceMetric {
    const metric: PerformanceMetric = {
      id: crypto.randomUUID(),
      name,
      value,
      target,
      status: value >= target ? "healthy" : "warning",
    };

    this.metrics.push(metric);
    return metric;
  }

  listMetrics(): PerformanceMetric[] {
    return this.metrics;
  }
}

export const performanceMonitor = new PerformanceMonitor();
