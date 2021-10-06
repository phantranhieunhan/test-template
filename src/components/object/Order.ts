export interface SaleInvoiceClient {

    SaleInvoiceID: string;
    Code: string;
    SaleInvoiceStatus: number;
    VoucherDate: string;
    AccountingDate: string;
    DeliveryDate: string;
    CustomerID: string;
    CustomerCode: string;
    CustomerName: string;
    CustomerAddress: string;
    CustomerPhone: string;
    ShipAddress: string;
    Amount: number;
    TaxAmount: number;
    TotalAmount: number;
    Notes?: string;
    StockID: string;
    OrderCode: string;
    OrderName: string;
    OrderPhone: string;
    TotalQuantity: number;
    AddressID:string;
    Latitue:string;
    Longitue:string;
    

}

export interface SaleInvoiceDetailClient {
    SaleInvoiceDetailID: string;
    SaleInvoiceID: string;
    ProductID: string;
    Barcode: string;
    ProductCode: string;
    ProductName: string;
    UnitName: string;
    Price: number;
    Quantity: number;
    Amount: number;
    DiscountAmount: number;
    TaxAmount: number;
    TotalAmount: number;
    SortOrder: number;
    QuantityOrg: number;
    Notes?: string;
}

export interface AccountBankingTypeList {
    AccountBankingTypeID: string;
    BankingTypeID: number;
    SiteID: number; 
    TypeName: string;
    IsActive: string;
    SortOrder: number;
    Notes: string;

}

export interface PaymentInfo {
    PaymentMethodID : string ;
    AccountBankingTypeID: string;
    Amount : string;
    Notes : string;

}