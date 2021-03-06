//Router-level middleware
module.exports ={
    auth: (req, res, next) => {
        var authorization = req.header('Authorization');
        var array_auth = authorization.split(' ');

        //console.log(array_auth[1]);
        var string_basic_auth = array_auth[1];
        var data_string_auth = (new Buffer(string_basic_auth, 'base64')).toString();
        //console.log(data_string_auth);

        var user_info = data_string_auth.split(':');
        if(user_info[0] == 'huynhthu' && user_info[1] == '123456'){
            next();
        }
        else{
            res.status(401);
            res.json({
                'error': true,
                'error_message': 'You don\'t have permission'
            });
        }
    }
}
//phần này áp dụng ở api post update nếu đủ quyền mới cho cập nhật thông tin