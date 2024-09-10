export type DepartmentCategories = {
    [key: string]: string[];
};

export const departmentCategories: DepartmentCategories = {
    'Corporate Communication and Branding': ['Brand Management', 'Internal Communication'],
    'Corporate HR': ['Recruitment', 'Employee Relations'],
    'Corporate IT': ['Software Issues', 'Hardware Issues'],
    'Finance and Fix Asset': ['Accounting', 'Asset Management'],
    'Legal and Risk Management Affairs': ['Compliance', 'Risk Assessment'],
    'Procurement and Administration': ['Purchasing', 'Vendor Management'],
    'Security': ['Access Control', 'Incident Reporting'],
    'Travel Desk': ['Flight Booking', 'Accommodation'],
};