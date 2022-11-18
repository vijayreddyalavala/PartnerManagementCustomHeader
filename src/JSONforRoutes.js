import HocPMHeader from './HocPMHeader';
import PartnerManagementHeader from './PartnerManagementHeader';

const jsonData = [
  {
    routerName: '/addPartner',
    component: HocPMHeader(PartnerManagementHeader)({
      breadcrumbName: 'PartnerMBreadCrumb',
      addButtonText: 'Add Button For PM',
    }),
  },
];
