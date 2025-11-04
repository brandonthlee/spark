// Import Knockout.js
import * as koModule from 'knockout';
const ko = koModule.default || koModule;

// Make ko available globally for Oracle JET bindings
if (typeof window !== 'undefined') {
  window.ko = ko;
}



// Knockout ViewModel
function EmployeeRecordViewModel() {
  const self = this;

  // Employee Data
  self.employeeId = ko.observable('EMP-001234');
  self.status = ko.observable('active');
  self.employeeType = ko.observable('fulltime');
  self.firstName = ko.observable('John');
  self.middleName = ko.observable('');
  self.lastName = ko.observable('Doe');
  self.displayName = ko.observable('John Doe');
  self.email = ko.observable('john.doe@company.com');
  self.phone = ko.observable('555-0123');
  self.mobile = ko.observable('555-0124');
  self.department = ko.observable('it');
  self.jobTitle = ko.observable('Software Engineer');
  self.hireDate = ko.observable('2020-01-15');
  self.terminationDate = ko.observable(null);
  self.employeeNumber = ko.observable('12345');
  self.manager = ko.observable('Jane Smith');
  self.location = ko.observable('ny');
  self.costCenter = ko.observable('CC-001');
  self.addressLine1 = ko.observable('123 Main Street');
  self.addressLine2 = ko.observable('Suite 100');
  self.city = ko.observable('New York');
  self.state = ko.observable('NY');
  self.zipCode = ko.observable('10001');
  self.country = ko.observable('us');

  // Options arrays for select components
  self.statusOptions = ko.observableArray([
    {value: 'active', label: 'Active'},
    {value: 'inactive', label: 'Inactive'}
  ]);
  
  self.employeeTypeOptions = ko.observableArray([
    {value: 'fulltime', label: 'Full Time'},
    {value: 'parttime', label: 'Part Time'},
    {value: 'contractor', label: 'Contractor'}
  ]);
  
  self.departmentOptions = ko.observableArray([
    {value: 'hr', label: 'Human Resources'},
    {value: 'it', label: 'Information Technology'},
    {value: 'sales', label: 'Sales'},
    {value: 'finance', label: 'Finance'},
    {value: 'operations', label: 'Operations'}
  ]);
  
  self.locationOptions = ko.observableArray([
    {value: 'ny', label: 'New York'},
    {value: 'la', label: 'Los Angeles'},
    {value: 'chicago', label: 'Chicago'},
    {value: 'remote', label: 'Remote'}
  ]);
  
  self.countryOptions = ko.observableArray([
    {value: 'us', label: 'United States'},
    {value: 'uk', label: 'United Kingdom'},
    {value: 'ca', label: 'Canada'}
  ]);

  // Computed observables
  self.isActive = ko.computed(function() {
    return self.status() === 'active';
  });

  // Methods
  self.saveEmployee = function() {
    const employeeData = {
      employeeId: self.employeeId(),
      status: self.status(),
      employeeType: self.employeeType(),
      firstName: self.firstName(),
      middleName: self.middleName(),
      lastName: self.lastName(),
      displayName: self.displayName(),
      email: self.email(),
      phone: self.phone(),
      mobile: self.mobile(),
      department: self.department(),
      jobTitle: self.jobTitle(),
      hireDate: self.hireDate(),
      terminationDate: self.terminationDate(),
      employeeNumber: self.employeeNumber(),
      manager: self.manager(),
      location: self.location(),
      costCenter: self.costCenter(),
      addressLine1: self.addressLine1(),
      addressLine2: self.addressLine2(),
      city: self.city(),
      state: self.state(),
      zipCode: self.zipCode(),
      country: self.country()
    };

    console.log('Saving employee data:', employeeData);
    
    // Simulate API call
    setTimeout(() => {
      alert('Employee record saved successfully!');
    }, 500);
  };

  self.cancelEdit = function() {
    console.log('Cancel edit');
    // Reset form logic would go here
  };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Apply Knockout bindings
  const viewModel = new EmployeeRecordViewModel();
  ko.applyBindings(viewModel, document.getElementById('appContent'));

  // Auto-update display name when first or last name changes
  ko.computed(function() {
    const firstName = viewModel.firstName() || '';
    const lastName = viewModel.lastName() || '';
    viewModel.displayName(firstName + ' ' + lastName);
  });
});

// Export for potential use elsewhere
export default EmployeeRecordViewModel;
