import { ExecutiveCouncil } from "@/core/ExecutiveCouncil";
import { PolicyEngine } from "@/core/PolicyEngine";
import { DivisionRegistry } from "@/core/DivisionRegistry";
import { ExecutiveDirectiveManager } from "@/core/ExecutiveDirective";
import { AuditLog } from "@/core/AuditLog";
import { StrategicPlan } from "@/core/StrategicPlan";
import { PerformanceMonitor } from "@/core/PerformanceMonitor";

export const executiveDatabase = {
  council: new ExecutiveCouncil(),
  policies: new PolicyEngine(),
  divisions: new DivisionRegistry(),
  directives: new ExecutiveDirectiveManager(),
  audit: new AuditLog(),
  strategy: new StrategicPlan(),
  performance: new PerformanceMonitor(),
};

export default executiveDatabase;
