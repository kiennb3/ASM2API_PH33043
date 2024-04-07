import { useDispatch, useSelector } from "react-redux";
// import { addTodo, updateTodo,toggleTodoStatus } from "../redux/reducers/todoReducer";
import { Modal } from 'react-native';


import { Button, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";


import { fetchTodos, deleteTodoApi, addTodoAPI, updateTodoApi, toggleTodoApi } from '../redux/actions/todoAction';




const TodoScreen = () => {
    //1. Khai báo các state để thực hiện thêm
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [chitiet, setChitiet] = useState('');
    // Dành cho sửa: Cần có state lưu trạng thái đang sửa bản ghi nào
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editImage, setEditImage] = useState('');
    const [editChitiet, setEditChitiet] = useState('');// chuỗi tiêu đề
    const [idEdit, setIdEdit] = useState(null); //lưu id bản ghi cần sửa
    //lấy  danh sách dữ liệu
    const listTodo = useSelector(state => state.listTodo.listTodo);
    // lấy đối tượng để điều khiển các action
    const dispatch = useDispatch();// của redux




    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);





    const handleEdit = (id, name, title, price, image, title1) => {
        setEditName(name);
        setEditDescription(title);
        setEditPrice(price);
        setEditImage(image);
        setEditChitiet( title1);
        setIdEdit(id);
        setIsModalVisible(true); // Hiển thị modal khi nhấn "Update"
    }
    const handleSave = () => {
        handleUpdate(); // Thực hiện cập nhật dữ liệu
        setIsModalVisible(false); // Đóng modal sau khi cập nhật thành công
    }
    // hàm lưu kết quả sửa
    const handleUpdate = () => {
        let duLieuUpdate = { name: editName, title: editDescription, price: editPrice, image: editImage, title1: editChitiet };
        dispatch(updateTodoApi({ id: idEdit, data: duLieuUpdate }))
            .then((result) => {
                console.log('Todo update successfully!');
                setEditName('');
                setEditDescription('');
                setEditPrice('');
                setEditImage('');
                setEditChitiet('');
                setIdEdit(null);
            })
            .catch((error) => {
                console.error('Error update todo:', error);
            });
    }


    // hàm xử lý việc thêm
    const handleAddTodo = () => {
        let duLieuThem = { name: name, description: description, price: price, image: image, chitiet: chitiet };
        // dispatch( addTodo ( duLieuThem )  );
dispatch(addTodoAPI(duLieuThem))
            .then((result) => {
                // console.log(result);


                console.log('Todo add successfully!');
            })
            .catch((error) => {
                console.error('Error add todo:', error);
            });


    }
    // hàm xử lý xóa
    const handleDeleteTodo = async (id) => {


        dispatch(deleteTodoApi(id))
            .then((result) => {
                console.log('Todo deleted successfully!');
            })
            .catch((error) => {
                console.error('Error deleting todo:', error);
            });



    }



    return (
        <ScrollView>
            <View style={{ margin: 30 }}>
                {/* in danh sách todo: */}
                {
                    listTodo.map(row => (
                        <View key={row.id}
                            style={{ margin: 10, padding: 10 }}>


                            <>
                                <TouchableOpacity style={styles.productItem} onPress={() => handleProductPress(row)}>
                                    <Image source={{ uri: row.image }} style={styles.productImage} />
                                    <View style={styles.productDetails}>
                                        <Text style={styles.productName}>{row.name}</Text>
                                        <Text style={styles.productDescription}>{row.title1}</Text>
                                        <Text style={styles.productPrice}>$ {row.price}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                        <TouchableOpacity style={styles.addToCartButton} onPress={() => handleDeleteTodo(row.id)}>
                                            <Text style={styles.addToCartButtonText}>Delete</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.addToCartButton1} onPress={() => handleEdit(row.id,row.name,row.title,row.price,row.image,row.title1)}>
                                            <Text style={styles.addToCartButtonText}>Update</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </>









                        </View>
                    ))
                }
            </View>
            {/* Biểu mẫu sửa đổi nằm trong Modal */}
            <Modal visible={isModalVisible} animationType="slide" 
        transparent={true}>
                <View style={{backgroundColor: '#fff',margin:10,height:450,borderRadius:8,alignItems: "center",marginTop:70}}>
                    {/* Biểu mẫu sửa đổi */}
                    <TextInput
                        style={styles.input1}
                        placeholder="Name"
value={editName}
                        onChangeText={setEditName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={editDescription}
                        onChangeText={setEditDescription}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        value={editPrice.toString()}
                        onChangeText={setEditPrice}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Image"
                        value={editImage}
                        onChangeText={setEditImage}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Chitiet"
                        value={editChitiet}
                        onChangeText={setEditChitiet}
                    />
                    {/* Các trường khác */}
                    <View style={{flex:1 ,flexDirection:"row",justifyContent: "center",gap:40}}>
                        <TouchableOpacity style={styles.addToCartButton1} onPress={handleSave}>
                            <Text style={styles.addToCartButtonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addToCartButton1} onPress={() => setIsModalVisible(false)}>
                            <Text style={styles.addToCartButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    dotActive: {
        margin: 3,
        color: '#fff'
    },
    dot: {
        margin: 3,
        color: 'black'
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    wrap: {
        width: 325,
        height: 150,
        borderRadius: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        padding: 16,
    },
    cf: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 17,
        color: 'black',
        marginBottom: 15,

    },
    cf1: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 17,
        color: 'black',
        marginBottom: 15,
        marginTop: 20,

    },
    productsList: {
        marginTop: 0,
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#252A32',
        padding: 10,
        margin: 10,
        width: 300,
        borderRadius: 7,
        borderWidth: 1,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 15,
tintColor: '#52555A',
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
    },
    head: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    settingContainer: {
        marginLeft: 17
    },
    imageContainer: {
        marginRight: 17
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 5,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 17,
    },
    menuContainer: {
        marginTop: 20,
        height: 40, // Tăng chiều cao để chứa tất cả các mục menu
    },
    menuItem: {
        height: 35,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    menuText: {
        color: '#FFFFFF',
    },
    selectedMenuItem: {
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
    },
    selectedMenuText: {
        color: 'orange',
    },
    productItem: {
        flexDirection: 'column',
        marginVertical: 10,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        height: 280,
        width: 250,
        margin: 10,
    },
    productImage: {
        width: 125,
        height: 125,
        borderRadius: 5,
        marginTop: 2,
        marginLeft: 54,
    },
    productDetails: {
        marginLeft: 10,
        flex: 1,
    },
    productName: {
        color: 'black',
        marginTop: 10,
        fontSize: 13,
        lineHeight: 20,
    },
    productDescription: {
        color: 'black',
        marginTop: 10,
        fontSize: 9,
    },
    productPrice: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        borderColor: '#252A32',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        color: 'black',
        width: 270,
        borderRadius: 7,
    },
    input1: {
        borderColor: '#252A32',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        color: 'black',
        width: 270,
        borderRadius: 7,
        marginTop:20
    },
    addToCartButton: {
        backgroundColor: '#66CCFF',
        height: 30,
        width: 60,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 50,
        marginTop: 30

    },
    addToCartButton1: {
        backgroundColor: '#66CCFF',
        height: 30,
        width: 60,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 30

    },
    addToCartButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 5,
    },
});
export default TodoScreen;