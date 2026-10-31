export type PolicyStatus = "draft" | "approved" | "active" | "archived";

export interface PolicyRecord {
  id: string;
  title: string;
  summary: string;
  owner: string;
  status: PolicyStatus;
  createdAt: string;
}

export class PolicyEngine {
  private policies: PolicyRecord[] = [];

  createPolicy(title: string, summary: string, owner: string): PolicyRecord {
    const policy: PolicyRecord = {
      id: crypto.randomUUID(),
      title,
      summary,
      owner,
      status: "draft",
      createdAt: new Date().toISOString(),
    };

    this.policies.push(policy);
    return policy;
  }

  approvePolicy(id: string): PolicyRecord | undefined {
    const policy = this.policies.find((item) => item.id === id);
    if (policy) {
      policy.status = "approved";
    }
    return policy;
  }

  listPolicies(): PolicyRecord[] {
    return this.policies;
  }
}

export const policyEngine = new PolicyEngine();
