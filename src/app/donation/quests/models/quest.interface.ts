export interface Quest {
  id: number | string;
  name: string;
  status: string;
  description?: string;
  donationName?: string;
  donationDescription?: string;
  orphanageName: string;
  orphanageID: number;
  volunteerID?: string;
  fromDate: string;
  toDate: string;
}
