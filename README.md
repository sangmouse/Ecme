CRUD App
hiển thị danh sách người dùng\*

1 bảng danh sách: id, username, role, department, address, avatar
có nút tạo mới người dùng
tạo mới người dùng\*

form gồm các trường như sau:
user name*
department*
address*
role*
avatar
xem thông tin chi tiết của người dùng\*

cập nhật thông tin chi tiết của người dùng\*

xóa người dùng\*

phân trang cho danh sách

cho phép thay đổi số lượng người dùng hiển thị trên 1 trang trong danh sách: 5,10,15,20...

đăng nhập\*

form : username, password
đăng xuất\*

đăng ký (ko bắt buộc)

form: username, password, confirmPassword
footer

header

json-server
react-router-dom
sass
"scripts": {
"start": "concurrently \"npm run start-app\" \"npm run start-api\"",
"start-app": "react-scripts start",
"start-api": "json-server --watch db.json --port 3001",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
npm install sass react-router-dom json-server
npm install concurrently

1. npm install
2. npm start

3. signin page
   - click button signin =>
     - kiểm tra xem nếu username || password trống => hiển thị message lỗi
       - All field is required!
     - khi người dùng onChange vào ô input => xóa bỏ lỗi đi
     - style cho message lỗi màu đỏ
     - khi nhập đủ 2 field, click button =>
       - ktra nếu username = larry & password = larry123 => hiển thị message thông báo : Signin successfully!
     - nếu account sai => hiển thị message lỗi : Account incorrect!
     - style cho message thành công => màu xanh
     - sau 1s => điều hướng về home
