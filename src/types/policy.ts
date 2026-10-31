export interface PolicyType {
  id: string;
  title: string;
  summary: string;
  owner: string;
  status: "draft" | "approved" | "active" | "archived";
}
