export interface AuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  summary: string;
}

export class AuditLog {
  private entries: AuditEntry[] = [];

  record(actor: string, action: string, summary: string): AuditEntry {
    const entry: AuditEntry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      actor,
      action,
      summary,
    };

    this.entries.push(entry);
    return entry;
  }

  getAll(): AuditEntry[] {
    return this.entries;
  }
}

export const auditLog = new AuditLog();
