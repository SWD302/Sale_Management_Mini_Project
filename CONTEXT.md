```mermaid
graph LR

   
    %% --- ĐỊNH NGHĨA CÁC ĐỐI TƯỢNG ---
    System((HỆ THỐNG TRUNG TÂM<br><br><b>Sales Management Mini</b>))

    subgraph Admin_Section [Quản trị viên Hệ thống]
        Admin[System Admin]
        Admin_In[📥 <b>Gửi vào:</b><br>- Cấu hình store/branch<br>- Ma trận quyền roles/permissions]
        Admin_Out[📤 <b>Nhận ra:</b><br>- Nhật ký audit_logs<br>- API /health]
    end

    subgraph Manager_Section [Quản lý Cửa hàng/Chi nhánh]
        Manager[Store/Branch Manager]
        Manager_In[📥 <b>Gửi vào:</b><br>- Danh mục hàng hóa/giá<br>- Phiếu kho: receipts, stocktakes...<br>- Tài liệu ai_training_documents]
        Manager_Out[📤 <b>Nhận ra:</b><br>- Báo cáo ReportController<br>- Cảnh báo reorder_level<br>- Biến động kho inventory_transactions]
    end

    subgraph Cashier_Section [Thu ngân]
        Cashier[Frontline Cashier]
        Cashier_In[📥 <b>Gửi vào:</b><br>- Quét Barcode/SKU<br>- SĐT hội viên<br>- Đơn nháp parked_orders<br>- Tiền & PT thanh toán]
        Cashier_Out[📤 <b>Nhận ra:</b><br>- Phản hồi Sound/Flash<br>- Hóa đơn Receipt<br>- Cảnh báo hết hàng/sai chi nhánh]
    end

    subgraph Customer_Section [Khách hàng]
        Customer[Customer]
        Customer_In[📥 <b>Gửi vào:</b><br>- Tiền mặt/Thanh toán ví<br>- SĐT loyalty_points]
        Customer_Out[📤 <b>Nhận ra:</b><br>- Biên lai & Điểm tích lũy<br>- Hàng hóa & Dịch vụ]
    end

    subgraph Supplier_Section [Nhà cung cấp]
        Supplier[Supplier]
        Supplier_In[📥 <b>Gửi vào:</b><br>- Danh mục sản phẩm cung cấp<br>- Lô hàng thực tế & Hóa đơn]
        Supplier_Out[📤 <b>Nhận ra:</b><br>- Xác nhận Goods Receipt]
    end

    subgraph AI_Section [SaleMaster AI Agent]
        AIAgent((AI Agent))
        AI_In[📥 <b>Đồng bộ kiến thức:</b><br>- Đọc ai_training_documents]
        AI_Out[📤 <b>Truy vấn nghiệp vụ:</b><br>- Dịch ngôn ngữ tự nhiên -> API]
    end

    %% --- ĐƯỜNG ĐI CỦA LUỒNG DỮ LIỆU ---
    Admin --> Admin_In
    Admin_In -->|Cấu hình & Phân quyền| System
    System --> Admin_Out
    Admin_Out --> Admin

    Manager --> Manager_In
    Manager_In -->|Quản lý kho & sản phẩm| System
    System --> Manager_Out
    Manager_Out --> Manager

    Cashier --> Cashier_In
    Cashier_In -->|Thao tác POS & Bán hàng| System
    System --> Cashier_Out
    Cashier_Out --> Cashier

    Customer --> Customer_In
    Customer_In -->|Thanh toán & Tích điểm| System
    System --> Customer_Out
    Customer_Out --> Customer

    Supplier --> Supplier_In
    Supplier_In -->|Giao hàng & Hóa đơn| System
    System --> Supplier_Out
    Supplier_Out --> Supplier

    System <--> AI_In
    AI_In <-->|RAG / Vector DB| AIAgent
    AIAgent <--> AI_Out
    AI_Out <-->|Gọi API lấy dữ liệu tổng hợp| System

    %% --- STYLE GIAO DIỆN ---
    style System fill:#ff79c6,stroke:#333,stroke-width:3px,color:#fff;
    style AIAgent fill:#8be9fd,stroke:#333,stroke-width:2px;
    style Admin fill:#fff,stroke:#333;
    style Manager fill:#fff,stroke:#333;
    style Cashier fill:#fff,stroke:#333;
    style Customer fill:#fff,stroke:#333;
    style Supplier fill:#fff,stroke:#333;
    
    style Admin_Section fill:#f8f8f2,stroke:#bd93f9;
    style Manager_Section fill:#f8f8f2,stroke:#bd93f9;
    style Cashier_Section fill:#f8f8f2,stroke:#bd93f9;
    style Customer_Section fill:#f8f8f2,stroke:#bd93f9;
    style Supplier_Section fill:#f8f8f2,stroke:#bd93f9;
    style AI_Section fill:#f8f8f2,stroke:#ffb86c;