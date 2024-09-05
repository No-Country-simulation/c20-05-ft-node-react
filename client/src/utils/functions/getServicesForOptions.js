export const getServicesForOptions = (serviceType) => {
    return serviceType.map(service => service.careType);
};
