export interface ExecutiveDirective {
  id: string;
  title: string;
  description: string;
  issuedBy: string;
  issuedAt: string;
  status: "active" | "completed" | "archived";
}

export class ExecutiveDirectiveManager {
  private directives: ExecutiveDirective[] = [];

  issue(title: string, description: string, issuedBy: string): ExecutiveDirective {
    const directive: ExecutiveDirective = {
      id: crypto.randomUUID(),
      title,
      description,
      issuedBy,
      issuedAt: new Date().toISOString(),
      status: "active",
    };

    this.directives.push(directive);
    return directive;
  }

  getAll(): ExecutiveDirective[] {
    return this.directives;
  }

  complete(id: string): void {
    const directive = this.directives.find((item) => item.id === id);
    if (directive) {
      directive.status = "completed";
    }
  }
}

export const executiveDirectiveManager = new ExecutiveDirectiveManager();
