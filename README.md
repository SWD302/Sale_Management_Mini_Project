# 📝 QUY CHUẨN ĐẶT TÊN BRANCH & COMMIT DỰ ÁN

Tài liệu này quy định chi tiết về quy tắc đặt tên nhánh (Branch) và lịch sử thay đổi (Commit) nhằm đảm bảo tính đồng nhất, rõ ràng và dễ quản lý cho toàn bộ mã nguồn của dự án.

---

## 🌿 1. Quy Định Đặt Tên Branch (Nhánh)

### 📌 Cú pháp chuẩn
> **`<side>/<YYYYMMDD>-<member>-<feature>`**

### 🔍 Chi tiết các thành phần
| Thành phần | Ý nghĩa cấu trúc | Gợi ý giá trị |
| :--- | :--- | :--- |
| **`<side>`** | Phía module / giao diện làm việc | `admin`, `client`, `api`, `shared` |
| **`<YYYYMMDD>`** | Ngày tạo nhánh (Định dạng: NămThángNgày) | `20260230` |
| **`<member>`** | Tên viết tắt hoặc tài khoản của thành viên | `haidt` |
| **`<feature>`** | Tên ngắn gọn của tính năng (ngăn cách bằng dấu `-`) | `change-password` |

### 💡 Ví dụ minh họa
* 🔹 `admin/20260230-haidt-change-password`
* 🔹 `client/202602030-haidt-change-profile`
* 🔹 *v.v.........*

---

## 💾 2. Quy Định Đặt Tên Commit (Lịch sử lưu code)

### 📌 Cú pháp chuẩn
> **`[YYYYMMDD][NAME-ACCOUNT] <content-commit>`**

### 🔍 Chi tiết các thành phần
* 📅 **`[YYYYMMDD]`**: Ngày thực hiện commit code (để trong dấu ngoặc vuông).
* 👤 **`[NAME-ACCOUNT]`**: Tên định danh tài khoản (để trong dấu ngoặc vuông).
* 📝 **`<content-commit>`**: Nội dung mô tả ngắn gọn về phần code thay đổi (ngăn cách bằng dấu `-`).

### 💡 Ví dụ minh họa
* ✅ `[20260230][HaiDT] add-layout-structure-for-admin-and-client`

---
⚠️ **Lưu ý chung:** Toàn bộ thành viên bắt buộc tuân thủ quy chuẩn này trước khi push code để kiểm soát lịch sử Git một cách chuyên nghiệp nhất.
