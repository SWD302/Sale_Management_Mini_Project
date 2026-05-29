# Sales Management Mini - Use Case Diagram

```mermaid
graph LR
    %% ──────────────────────────────────────────
    %% ACTOR DEFINITIONS (stick-figure style)
    %% ──────────────────────────────────────────
    Admin(["👤\nAdmin"])
    StoreManager(["👤\nStore Manager"])
    BranchManager(["👤\nBranch Manager"])
    Cashier(["👤\nCashier"])
    WarehouseStaff(["👤\nWarehouse Staff"])
    Customer(["👤\nCustomer"])

    %% ──────────────────────────────────────────
    %% 1. AUTHENTICATION & AUTHORIZATION
    %% ──────────────────────────────────────────
    subgraph AUTH["🔐 Authentication & Authorization"]
        UC_Register(("Đăng ký tài khoản"))
        UC_Login(("Đăng nhập"))
        UC_Logout(("Đăng xuất"))
        UC_ChangePass(("Đổi mật khẩu"))
        UC_JWT(("Xác thực bằng JWT"))
        UC_RBAC(("Phân quyền theo role/permission"))
        UC_BlockAccess(("Chặn truy cập theo quyền"))
    end

    Admin --> UC_Register
    Admin --> UC_Login
    Admin --> UC_Logout
    Admin --> UC_ChangePass
    Admin --> UC_RBAC
    Admin --> UC_BlockAccess
    StoreManager --> UC_Login
    StoreManager --> UC_Logout
    StoreManager --> UC_ChangePass
    BranchManager --> UC_Login
    BranchManager --> UC_Logout
    BranchManager --> UC_ChangePass
    Cashier --> UC_Login
    Cashier --> UC_Logout
    Cashier --> UC_ChangePass
    WarehouseStaff --> UC_Login
    WarehouseStaff --> UC_Logout
    WarehouseStaff --> UC_ChangePass
    UC_Login --> UC_JWT

    %% ──────────────────────────────────────────
    %% 2. DASHBOARD
    %% ──────────────────────────────────────────
    subgraph DASHBOARD["📊 Dashboard"]
        UC_ViewRevenue(("Xem tổng quan doanh thu"))
        UC_ViewOrders(("Xem số đơn bán"))
        UC_ViewCustomers(("Xem số khách hàng"))
        UC_ViewImportVal(("Xem giá trị nhập hàng"))
        UC_ViewProfit(("Xem lợi nhuận tạm tính"))
        UC_ViewLowStock(("Xem cảnh báo tồn kho thấp"))
    end

    Admin --> UC_ViewRevenue
    Admin --> UC_ViewOrders
    Admin --> UC_ViewCustomers
    Admin --> UC_ViewImportVal
    Admin --> UC_ViewProfit
    Admin --> UC_ViewLowStock
    StoreManager --> UC_ViewRevenue
    StoreManager --> UC_ViewOrders
    StoreManager --> UC_ViewCustomers
    StoreManager --> UC_ViewImportVal
    StoreManager --> UC_ViewProfit
    StoreManager --> UC_ViewLowStock
    BranchManager --> UC_ViewRevenue
    BranchManager --> UC_ViewOrders
    BranchManager --> UC_ViewLowStock

    %% ──────────────────────────────────────────
    %% 3. STORE MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph STORE["🏪 Store Management"]
        UC_ViewStoreList(("Xem danh sách cửa hàng"))
        UC_ViewStoreDetail(("Xem chi tiết cửa hàng"))
        UC_CreateStore(("Tạo cửa hàng"))
        UC_UpdateStore(("Cập nhật cửa hàng"))
    end

    Admin --> UC_ViewStoreList
    Admin --> UC_ViewStoreDetail
    Admin --> UC_CreateStore
    Admin --> UC_UpdateStore
    StoreManager --> UC_ViewStoreList
    StoreManager --> UC_ViewStoreDetail

    %% ──────────────────────────────────────────
    %% 4. BRANCH MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph BRANCH["🏬 Branch Management"]
        UC_ViewBranchList(("Xem danh sách chi nhánh"))
        UC_ViewBranchDetail(("Xem chi tiết chi nhánh"))
        UC_CreateBranch(("Tạo chi nhánh"))
        UC_UpdateBranch(("Cập nhật chi nhánh"))
        UC_ManageBranchByStore(("Quản lý chi nhánh theo cửa hàng"))
    end

    Admin --> UC_ViewBranchList
    Admin --> UC_ViewBranchDetail
    Admin --> UC_CreateBranch
    Admin --> UC_UpdateBranch
    Admin --> UC_ManageBranchByStore
    StoreManager --> UC_ViewBranchList
    StoreManager --> UC_ViewBranchDetail
    StoreManager --> UC_CreateBranch
    StoreManager --> UC_UpdateBranch
    BranchManager --> UC_ViewBranchDetail

    %% ──────────────────────────────────────────
    %% 5. WAREHOUSE MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph WAREHOUSE["🏭 Warehouse Management"]
        UC_ViewWarehouseList(("Xem danh sách kho"))
        UC_ViewWarehouseDetail(("Xem chi tiết kho"))
        UC_ManageMainWarehouse(("Quản lý kho tổng"))
        UC_ManageBranchWarehouse(("Quản lý kho chi nhánh"))
        UC_ManageWarehouseByBranch(("Quản lý kho theo cửa hàng/chi nhánh"))
    end

    Admin --> UC_ViewWarehouseList
    Admin --> UC_ViewWarehouseDetail
    Admin --> UC_ManageMainWarehouse
    Admin --> UC_ManageBranchWarehouse
    Admin --> UC_ManageWarehouseByBranch
    StoreManager --> UC_ViewWarehouseList
    StoreManager --> UC_ManageBranchWarehouse
    BranchManager --> UC_ViewWarehouseList
    BranchManager --> UC_ViewWarehouseDetail
    WarehouseStaff --> UC_ViewWarehouseList
    WarehouseStaff --> UC_ViewWarehouseDetail

    %% ──────────────────────────────────────────
    %% 6. MASTER DATA MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph MASTER["📋 Master Data Management"]
        UC_ManageBrand(("Quản lý thương hiệu"))
        UC_ManageCategory(("Quản lý nhóm hàng"))
        UC_ManageUnit(("Quản lý đơn vị tính"))
        UC_ManageSupplier(("Quản lý nhà cung cấp"))
        UC_CRUDMaster(("Tạo/Cập nhật/Xem/Xóa danh mục"))
    end

    Admin --> UC_ManageBrand
    Admin --> UC_ManageCategory
    Admin --> UC_ManageUnit
    Admin --> UC_ManageSupplier
    Admin --> UC_CRUDMaster
    StoreManager --> UC_ManageBrand
    StoreManager --> UC_ManageCategory
    StoreManager --> UC_ManageUnit
    StoreManager --> UC_ManageSupplier

    %% ──────────────────────────────────────────
    %% 7. PRODUCT MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph PRODUCT["📦 Product Management"]
        UC_CreateProduct(("Tạo sản phẩm"))
        UC_UpdateProduct(("Cập nhật sản phẩm"))
        UC_ViewProductDetail(("Xem chi tiết sản phẩm"))
        UC_SoftDeleteProduct(("Xóa mềm sản phẩm"))
        UC_ManageVariant(("Quản lý biến thể sản phẩm"))
        UC_ManageSKU(("Quản lý SKU"))
        UC_ManageBarcode(("Quản lý barcode"))
        UC_ManageProductImage(("Quản lý ảnh sản phẩm"))
        UC_SearchProduct(("Tìm kiếm và lọc sản phẩm"))
    end

    Admin --> UC_CreateProduct
    Admin --> UC_UpdateProduct
    Admin --> UC_ViewProductDetail
    Admin --> UC_SoftDeleteProduct
    Admin --> UC_ManageVariant
    Admin --> UC_ManageSKU
    Admin --> UC_ManageBarcode
    Admin --> UC_ManageProductImage
    StoreManager --> UC_CreateProduct
    StoreManager --> UC_UpdateProduct
    StoreManager --> UC_ViewProductDetail
    StoreManager --> UC_ManageVariant
    StoreManager --> UC_ManageSKU
    BranchManager --> UC_ViewProductDetail
    BranchManager --> UC_SearchProduct
    Cashier --> UC_SearchProduct
    Cashier --> UC_ViewProductDetail

    %% ──────────────────────────────────────────
    %% 8. CUSTOMER MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph CUSTOMER["👥 Customer Management"]
        UC_ViewCustomerList(("Xem danh sách khách hàng"))
        UC_ViewCustomerDetail(("Xem chi tiết khách hàng"))
        UC_CreateCustomer(("Tạo khách hàng"))
        UC_UpdateCustomer(("Cập nhật khách hàng"))
        UC_SearchCustomer(("Tìm kiếm khách hàng"))
        UC_QuickCreateCustomer(("Tạo khách hàng nhanh khi bán hàng"))
    end

    Admin --> UC_ViewCustomerList
    Admin --> UC_ViewCustomerDetail
    Admin --> UC_CreateCustomer
    Admin --> UC_UpdateCustomer
    StoreManager --> UC_ViewCustomerList
    StoreManager --> UC_ViewCustomerDetail
    BranchManager --> UC_ViewCustomerList
    Cashier --> UC_SearchCustomer
    Cashier --> UC_QuickCreateCustomer
    Cashier --> UC_CreateCustomer
    Customer --> UC_ViewCustomerDetail

    %% ──────────────────────────────────────────
    %% 9. POS SALES
    %% ──────────────────────────────────────────
    subgraph POS["🖥️ POS Sales"]
        UC_SearchPOS(("Tìm sản phẩm theo tên/SKU/barcode"))
        UC_ScanBarcode(("Quét barcode"))
        UC_AddToCart(("Thêm sản phẩm vào giỏ hàng"))
        UC_AdjustQty(("Tăng/giảm số lượng"))
        UC_ApplyDiscount(("Áp dụng giảm giá"))
        UC_CalcVAT(("Tính VAT"))
        UC_CalcTotal(("Tính tổng tiền"))
        UC_SelectPayment(("Chọn phương thức thanh toán"))
        UC_CreateSaleOrder(("Tạo đơn bán"))
        UC_ConfirmPayment(("Xác nhận thanh toán"))
        UC_SaveDraftOrder(("Lưu đơn tạm"))
    end

    Cashier --> UC_SearchPOS
    Cashier --> UC_ScanBarcode
    Cashier --> UC_AddToCart
    Cashier --> UC_AdjustQty
    Cashier --> UC_ApplyDiscount
    Cashier --> UC_CalcVAT
    Cashier --> UC_CalcTotal
    Cashier --> UC_SelectPayment
    Cashier --> UC_CreateSaleOrder
    Cashier --> UC_ConfirmPayment
    Cashier --> UC_SaveDraftOrder
    BranchManager --> UC_ApplyDiscount
    BranchManager --> UC_CreateSaleOrder

    %% ──────────────────────────────────────────
    %% 10. SALES ORDER MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph SALESORDER["📝 Sales Order Management"]
        UC_ViewSaleOrderList(("Xem danh sách đơn bán"))
        UC_ViewSaleOrderDetail(("Xem chi tiết đơn bán"))
        UC_CreateDraftOrder(("Tạo đơn bán nháp"))
        UC_ConfirmOrder(("Xác nhận đơn bán"))
        UC_CancelOrder(("Hủy đơn bán"))
        UC_SearchOrder(("Tìm đơn bán theo mã"))
        UC_RecordPayment(("Ghi nhận thanh toán"))
        UC_DeductStock(("Trừ tồn kho khi bán hàng"))
    end

    Admin --> UC_ViewSaleOrderList
    Admin --> UC_CancelOrder
    StoreManager --> UC_ViewSaleOrderList
    StoreManager --> UC_ViewSaleOrderDetail
    StoreManager --> UC_CancelOrder
    BranchManager --> UC_ViewSaleOrderList
    BranchManager --> UC_ViewSaleOrderDetail
    BranchManager --> UC_ConfirmOrder
    BranchManager --> UC_CancelOrder
    Cashier --> UC_ViewSaleOrderList
    Cashier --> UC_ViewSaleOrderDetail
    Cashier --> UC_CreateDraftOrder
    Cashier --> UC_ConfirmOrder
    Cashier --> UC_SearchOrder
    Cashier --> UC_RecordPayment
    Cashier --> UC_DeductStock

    %% ──────────────────────────────────────────
    %% 11. INVENTORY MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph INVENTORY["📦 Inventory Management"]
        UC_ViewStockByWarehouse(("Xem tồn kho theo kho"))
        UC_ViewStockByProduct(("Xem tồn kho theo sản phẩm"))
        UC_CheckAvailStock(("Kiểm tra tồn khả dụng"))
        UC_TrackStockMovement(("Theo dõi biến động tồn kho"))
        UC_StockHistory(("Ghi nhận lịch sử nhập/bán/trả/chuyển/kiểm"))
    end

    Admin --> UC_ViewStockByWarehouse
    Admin --> UC_ViewStockByProduct
    Admin --> UC_TrackStockMovement
    StoreManager --> UC_ViewStockByWarehouse
    StoreManager --> UC_ViewStockByProduct
    StoreManager --> UC_TrackStockMovement
    BranchManager --> UC_ViewStockByWarehouse
    BranchManager --> UC_CheckAvailStock
    WarehouseStaff --> UC_ViewStockByWarehouse
    WarehouseStaff --> UC_ViewStockByProduct
    WarehouseStaff --> UC_CheckAvailStock
    WarehouseStaff --> UC_TrackStockMovement
    WarehouseStaff --> UC_StockHistory
    Cashier --> UC_CheckAvailStock

    %% ──────────────────────────────────────────
    %% 12. GOODS RECEIPT MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph RECEIPT["📥 Goods Receipt Management"]
        UC_ViewReceiptList(("Xem danh sách phiếu nhập"))
        UC_ViewReceiptDetail(("Xem chi tiết phiếu nhập"))
        UC_CreateReceipt(("Tạo phiếu nhập"))
        UC_ConfirmReceipt(("Xác nhận phiếu nhập"))
        UC_UpdateStockAfterReceipt(("Cập nhật tồn kho sau nhập hàng"))
    end

    Admin --> UC_ViewReceiptList
    StoreManager --> UC_ViewReceiptList
    StoreManager --> UC_ViewReceiptDetail
    StoreManager --> UC_ConfirmReceipt
    BranchManager --> UC_ViewReceiptList
    BranchManager --> UC_ViewReceiptDetail
    WarehouseStaff --> UC_ViewReceiptList
    WarehouseStaff --> UC_ViewReceiptDetail
    WarehouseStaff --> UC_CreateReceipt
    WarehouseStaff --> UC_ConfirmReceipt
    WarehouseStaff --> UC_UpdateStockAfterReceipt

    %% ──────────────────────────────────────────
    %% 13. SALES RETURN MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph RETURN["↩️ Sales Return Management"]
        UC_ViewReturnList(("Xem danh sách phiếu trả"))
        UC_ViewReturnDetail(("Xem chi tiết phiếu trả"))
        UC_CreateReturn(("Tạo phiếu trả hàng"))
        UC_ConfirmReturn(("Xác nhận trả hàng"))
        UC_AddStockAfterReturn(("Cộng lại tồn kho sau trả hàng"))
    end

    Admin --> UC_ViewReturnList
    StoreManager --> UC_ViewReturnList
    StoreManager --> UC_ViewReturnDetail
    StoreManager --> UC_ConfirmReturn
    BranchManager --> UC_ViewReturnList
    BranchManager --> UC_ViewReturnDetail
    BranchManager --> UC_ConfirmReturn
    Cashier --> UC_CreateReturn
    Cashier --> UC_ViewReturnDetail
    WarehouseStaff --> UC_AddStockAfterReturn

    %% ──────────────────────────────────────────
    %% 14. STOCK TRANSFER MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph TRANSFER["🔄 Stock Transfer Management"]
        UC_ViewTransferList(("Xem danh sách phiếu chuyển"))
        UC_ViewTransferDetail(("Xem chi tiết phiếu chuyển"))
        UC_CreateTransfer(("Tạo phiếu chuyển kho"))
        UC_SendFromSource(("Gửi hàng từ kho nguồn"))
        UC_ReceiveAtDest(("Nhận hàng ở kho đích"))
        UC_UpdateStockTransfer(("Cập nhật tồn kho khi chuyển kho"))
    end

    Admin --> UC_ViewTransferList
    StoreManager --> UC_ViewTransferList
    StoreManager --> UC_ViewTransferDetail
    StoreManager --> UC_CreateTransfer
    BranchManager --> UC_ViewTransferList
    BranchManager --> UC_CreateTransfer
    WarehouseStaff --> UC_ViewTransferList
    WarehouseStaff --> UC_ViewTransferDetail
    WarehouseStaff --> UC_CreateTransfer
    WarehouseStaff --> UC_SendFromSource
    WarehouseStaff --> UC_ReceiveAtDest
    WarehouseStaff --> UC_UpdateStockTransfer

    %% ──────────────────────────────────────────
    %% 15. STOCKTAKE MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph STOCKTAKE["🔍 Stocktake Management"]
        UC_ViewStocktakeList(("Xem danh sách phiếu kiểm"))
        UC_ViewStocktakeDetail(("Xem chi tiết phiếu kiểm"))
        UC_CreateStocktake(("Tạo phiếu kiểm kho"))
        UC_EnterActualQty(("Nhập số lượng thực tế"))
        UC_CompareWithSystem(("So sánh với số lượng hệ thống"))
        UC_ConfirmStocktake(("Xác nhận kiểm kho"))
        UC_AdjustStockAfterTake(("Điều chỉnh tồn kho sau kiểm kho"))
    end

    Admin --> UC_ViewStocktakeList
    StoreManager --> UC_ViewStocktakeList
    StoreManager --> UC_ConfirmStocktake
    BranchManager --> UC_ViewStocktakeList
    BranchManager --> UC_ConfirmStocktake
    WarehouseStaff --> UC_ViewStocktakeList
    WarehouseStaff --> UC_ViewStocktakeDetail
    WarehouseStaff --> UC_CreateStocktake
    WarehouseStaff --> UC_EnterActualQty
    WarehouseStaff --> UC_CompareWithSystem
    WarehouseStaff --> UC_ConfirmStocktake
    WarehouseStaff --> UC_AdjustStockAfterTake

    %% ──────────────────────────────────────────
    %% 16. REPORT MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph REPORT["📈 Report Management"]
        UC_ViewSummaryReport(("Xem báo cáo tổng hợp"))
        UC_ViewRevenueReport(("Xem báo cáo doanh thu"))
        UC_ViewSaleOrderReport(("Xem báo cáo đơn bán"))
        UC_ViewReturnReport(("Xem báo cáo trả hàng"))
        UC_ViewReturnRate(("Xem tỷ lệ trả hàng"))
        UC_ViewReportByBranch(("Xem báo cáo theo cửa hàng/chi nhánh"))
    end

    Admin --> UC_ViewSummaryReport
    Admin --> UC_ViewRevenueReport
    Admin --> UC_ViewSaleOrderReport
    Admin --> UC_ViewReturnReport
    Admin --> UC_ViewReturnRate
    Admin --> UC_ViewReportByBranch
    StoreManager --> UC_ViewSummaryReport
    StoreManager --> UC_ViewRevenueReport
    StoreManager --> UC_ViewSaleOrderReport
    StoreManager --> UC_ViewReturnReport
    StoreManager --> UC_ViewReportByBranch
    BranchManager --> UC_ViewRevenueReport
    BranchManager --> UC_ViewSaleOrderReport
    BranchManager --> UC_ViewReturnReport

    %% ──────────────────────────────────────────
    %% 17. USER MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph USERMGMT["👤 User Management"]
        UC_ViewUserList(("Xem danh sách người dùng"))
        UC_ViewUserDetail(("Xem chi tiết người dùng"))
        UC_CreateUser(("Tạo người dùng"))
        UC_UpdateUser(("Cập nhật người dùng"))
        UC_UpdateAccountStatus(("Cập nhật trạng thái tài khoản"))
        UC_AssignRole(("Gán role cho người dùng"))
        UC_AssignStore(("Gán cửa hàng cho người dùng"))
        UC_AssignBranch(("Gán chi nhánh cho người dùng"))
    end

    Admin --> UC_ViewUserList
    Admin --> UC_ViewUserDetail
    Admin --> UC_CreateUser
    Admin --> UC_UpdateUser
    Admin --> UC_UpdateAccountStatus
    Admin --> UC_AssignRole
    Admin --> UC_AssignStore
    Admin --> UC_AssignBranch
    StoreManager --> UC_ViewUserList
    StoreManager --> UC_ViewUserDetail

    %% ──────────────────────────────────────────
    %% 18. STORE STAFF MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph STAFFMGMT["👥 Store Staff Management"]
        UC_ViewStaffList(("Xem danh sách nhân viên"))
        UC_ViewStaffDetail(("Xem chi tiết nhân viên"))
        UC_CreateStaff(("Tạo nhân viên"))
        UC_UpdateStaff(("Cập nhật nhân viên"))
        UC_ActivateStaff(("Kích hoạt nhân viên"))
        UC_DeactivateStaff(("Vô hiệu hóa nhân viên"))
        UC_ChangeBranchStaff(("Đổi chi nhánh cho nhân viên"))
    end

    Admin --> UC_ViewStaffList
    Admin --> UC_CreateStaff
    Admin --> UC_ActivateStaff
    Admin --> UC_DeactivateStaff
    StoreManager --> UC_ViewStaffList
    StoreManager --> UC_ViewStaffDetail
    StoreManager --> UC_CreateStaff
    StoreManager --> UC_UpdateStaff
    StoreManager --> UC_ActivateStaff
    StoreManager --> UC_DeactivateStaff
    StoreManager --> UC_ChangeBranchStaff
    BranchManager --> UC_ViewStaffList
    BranchManager --> UC_ViewStaffDetail
    BranchManager --> UC_UpdateStaff

    %% ──────────────────────────────────────────
    %% 19. RBAC MANAGEMENT
    %% ──────────────────────────────────────────
    subgraph RBACMGMT["🔒 RBAC Management"]
        UC_ViewRoleList(("Xem danh sách role"))
        UC_ViewPermissionList(("Xem danh sách permission"))
        UC_ManagePermOverride(("Quản lý permission override"))
        UC_ControlAccessByFunc(("Kiểm soát quyền theo chức năng"))
        UC_ControlAccessByScope(("Kiểm soát quyền theo phạm vi dữ liệu"))
    end

    Admin --> UC_ViewRoleList
    Admin --> UC_ViewPermissionList
    Admin --> UC_ManagePermOverride
    Admin --> UC_ControlAccessByFunc
    Admin --> UC_ControlAccessByScope

    %% ──────────────────────────────────────────
    %% 20. ACCOUNT SETTINGS
    %% ──────────────────────────────────────────
    subgraph ACCSETTINGS["⚙️ Account Settings"]
        UC_ViewAccountInfo(("Xem thông tin tài khoản"))
        UC_ChangePassAcc(("Đổi mật khẩu"))
        UC_LogoutAcc(("Đăng xuất tài khoản"))
    end

    Admin --> UC_ViewAccountInfo
    Admin --> UC_ChangePassAcc
    Admin --> UC_LogoutAcc
    StoreManager --> UC_ViewAccountInfo
    StoreManager --> UC_ChangePassAcc
    StoreManager --> UC_LogoutAcc
    BranchManager --> UC_ViewAccountInfo
    BranchManager --> UC_ChangePassAcc
    BranchManager --> UC_LogoutAcc
    Cashier --> UC_ViewAccountInfo
    Cashier --> UC_ChangePassAcc
    Cashier --> UC_LogoutAcc
    WarehouseStaff --> UC_ViewAccountInfo
    WarehouseStaff --> UC_ChangePassAcc
    WarehouseStaff --> UC_LogoutAcc

    %% ──────────────────────────────────────────
    %% 21. SALEMASTER AI
    %% ──────────────────────────────────────────
    subgraph AIMODULE["🤖 SaleMaster AI"]
        UC_ChatAI(("Chat AI hỗ trợ người dùng"))
        UC_ChatConversation(("Chat AI theo hội thoại"))
        UC_AskSalesData(("Hỏi đáp dữ liệu bán hàng"))
        UC_AnalyzeBusiness(("Phân tích dữ liệu kinh doanh"))
        UC_UploadDocAI(("Upload tài liệu để hỏi đáp"))
        UC_ManageConversation(("Quản lý hội thoại AI"))
        UC_ShareConversation(("Chia sẻ hội thoại AI"))
        UC_RateAI(("Đánh giá phản hồi AI"))
    end

    Admin --> UC_ChatAI
    Admin --> UC_AnalyzeBusiness
    Admin --> UC_ManageConversation
    StoreManager --> UC_ChatAI
    StoreManager --> UC_AskSalesData
    StoreManager --> UC_AnalyzeBusiness
    StoreManager --> UC_UploadDocAI
    BranchManager --> UC_ChatAI
    BranchManager --> UC_AskSalesData
    Cashier --> UC_ChatAI
    UC_ChatAI --> UC_ChatConversation
    UC_ChatConversation --> UC_ShareConversation
    UC_ChatConversation --> UC_RateAI

    %% ──────────────────────────────────────────
    %% 22. SYSTEM HEALTH CHECK
    %% ──────────────────────────────────────────
    subgraph HEALTHCHECK["🩺 System Health Check"]
        UC_CheckBackend(("Kiểm tra trạng thái backend"))
        UC_CheckAIService(("Kiểm tra trạng thái AI service"))
    end

    Admin --> UC_CheckBackend
    Admin --> UC_CheckAIService

    %% ──────────────────────────────────────────
    %% STYLING
    %% ──────────────────────────────────────────
    classDef actor fill:#dbeafe,stroke:#1d4ed8,stroke-width:2px,color:#1e3a5f,font-weight:bold
    classDef usecase fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#14532d
    classDef systemBoundary fill:#fefce8,stroke:#ca8a04,stroke-width:2px

    class Admin,StoreManager,BranchManager,Cashier,WarehouseStaff,Customer actor
```

---

## Actors & Roles Summary

| Actor | Primary Responsibilities |
|---|---|
| **Admin** | Full system access: users, stores, RBAC, reports, system health |
| **Store Manager** | Store/branch/product/staff management, reports, receipts |
| **Branch Manager** | Branch ops, sales orders, transfers, stocktake, returns |
| **Cashier** | POS sales, customer creation, returns, order management |
| **Warehouse Staff** | Inventory, goods receipt, stock transfer, stocktake |
| **Customer** | View own account/order details |
