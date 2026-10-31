export interface ExecutiveCouncilMember {
  id: string;
  name: string;
  title: string;
  department: string;
  status: "active" | "inactive";
}

export class ExecutiveCouncil {
  private members: ExecutiveCouncilMember[] = [];

  addMember(name: string, title: string, department: string): ExecutiveCouncilMember {
    const member: ExecutiveCouncilMember = {
      id: crypto.randomUUID(),
      name,
      title,
      department,
      status: "active",
    };

    this.members.push(member);
    return member;
  }

  listMembers(): ExecutiveCouncilMember[] {
    return this.members;
  }

  deactivateMember(id: string): void {
    const member = this.members.find((item) => item.id === id);
    if (member) {
      member.status = "inactive";
    }
  }
}

export const executiveCouncil = new ExecutiveCouncil();
