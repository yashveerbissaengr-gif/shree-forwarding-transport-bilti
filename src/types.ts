export interface BiltiData {
  biltiNumber: string;
  date: string;
  lorryNumber: string;
  consignor: string;
  consignee: string;
  through: string;
  from: string;
  to: string;
  numberOfPacks: string;
  description: string;
  weight: string;
  rate: string;
  totalFreight: string;
  remark: string;
  hamali: string;
  advance: string;
  balance: string;
  truckOwner: string;
  truckOwnerMobile: string;
  truckDriver: string;
  truckDriverMobile: string;
  driverLicence: string;
}

export const initialBiltiData: BiltiData = {
  biltiNumber: '',
  date: '',
  lorryNumber: '',
  consignor: '',
  consignee: '',
  through: '',
  from: 'Nagpur',
  to: '',
  numberOfPacks: '',
  description: '',
  weight: '',
  rate: '',
  totalFreight: '',
  remark: '',
  hamali: '',
  advance: '',
  balance: '',
  truckOwner: '',
  truckOwnerMobile: '',
  truckDriver: '',
  truckDriverMobile: '',
  driverLicence: '',
};
