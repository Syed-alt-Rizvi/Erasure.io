export interface AccountSite {
  id: string;
  name: string;
  domain: string;
  category: 'Social' | 'Finance' | 'Shopping' | 'Entertainment' | 'Tech' | 'Dev' | 'Other';
  logoUrl?: string;
  hasAccount: 'yes' | 'no' | 'unconfirmed';
  confidence: 'high' | 'medium' | 'low';
  breached: 'yes' | 'no' | 'unknown';
  breachDetails?: string;
  breachDate?: string;
  breachExposedData?: string[];
  deletionMethod: 'link' | 'email' | 'form';
  deletionUrl: string;
  privacyEmail: string;
  instructions?: string;
}

export interface DeletionRequest {
  id: string;
  siteId: string;
  siteName: string;
  siteDomain: string;
  userEmail: string;
  userName: string;
  status: 'draft' | 'sending' | 'sent' | 'completed' | 'failed';
  sentAt?: string;
  emailSubject: string;
  emailBody: string;
  referenceId: string;
  notes?: string;
}

export interface ScanResult {
  email: string;
  emailHash?: string;
  scannedAt: string;
  googleStorageStatus?: {
    isGoogleLinked: boolean;
    servicesFound: string[];
    securityStatus: string;
    details: string;
  };
  totalAccountsFound: number;
  totalBreachesFound: number;
  accounts: AccountSite[];
}
