export interface DivisionRecord {
  id: string;
  name: string;
  lead: string;
  purpose: string;
  status: "active" | "paused" | "archived";
}

export class DivisionRegistry {
  private divisions: DivisionRecord[] = [];

  registerDivision(name: string, lead: string, purpose: string): DivisionRecord {
    const division: DivisionRecord = {
      id: crypto.randomUUID(),
      name,
      lead,
      purpose,
      status: "active",
    };

    this.divisions.push(division);
    return division;
  }

  listDivisions(): DivisionRecord[] {
    return this.divisions;
  }

  updateStatus(id: string, status: DivisionRecord["status"]): void {
    const division = this.divisions.find((item) => item.id === id);
    if (division) {
      division.status = status;
    }
  }
}

export const divisionRegistry = new DivisionRegistry();
