export interface DivisionDefinition {
  id: string;
  name: string;
  lead: string;
  purpose: string;
  status: "active" | "paused" | "archived";
}

export interface PolicyDefinition {
  id: string;
  title: string;
  summary: string;
  owner: string;
  status: "draft" | "approved" | "active" | "archived";
}
