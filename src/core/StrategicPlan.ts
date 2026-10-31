export interface StrategicPlanItem {
  id: string;
  objective: string;
  owner: string;
  focus: string;
  status: "planned" | "in-progress" | "complete";
}

export class StrategicPlan {
  private items: StrategicPlanItem[] = [];

  addObjective(objective: string, owner: string, focus: string): StrategicPlanItem {
    const item: StrategicPlanItem = {
      id: crypto.randomUUID(),
      objective,
      owner,
      focus,
      status: "planned",
    };

    this.items.push(item);
    return item;
  }

  listObjectives(): StrategicPlanItem[] {
    return this.items;
  }
}

export const strategicPlan = new StrategicPlan();
