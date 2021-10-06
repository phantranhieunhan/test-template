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
    Notes: string;
    StockID: string;
    OrderCode: string;
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
    Notes: string;
}