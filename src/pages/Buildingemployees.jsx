import { useEffect, useState } from "react"
import { getListbuilding_employees, addbuilding_employees } from "../api/building_employees"  // sửa
import { Table, Button } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Buildingemployees() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});

    const loadData = async () => {
        const data = await getListbuilding_employees()  // sửa
        setData(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        addbuilding_employees(body)  // sửa
        .then(() => {
            loadData()
            setIsModalOpen(false)
        })
        .catch(err => {
            console.log("err", err)
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (e) => {
        setBody({...body, [e.target.name]: e.target.value})
    }

    const columns = [  // sửa
        {
            title: 'Mã nhân viên',
            dataIndex: 'bul_employeeId',
            key: 'bul_employeeId',
        },
       
        {
            title: 'Họ và Tên',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Ngày tháng năm sinh',
            dataIndex: 'birthDate',
            key: 'birthDate',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Vị trí công việc',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Lương cơ bản',
            dataIndex: 'salaryBase',
            key: 'salaryBase',
        },
    ]

    return (
        <div>
            <Button
                style={{ marginBottom: 20 }}
                type="primary"
                onClick={showModal}
            >
                Thêm mới
            </Button>
            <Table
                scroll={{
                    y: "calc(100vh - 280px)",
                    x: "calc(100vw - 280px)"
                }}
                dataSource={data}
                columns={columns}
                pagination={false}
                bordered
            />

            <ModalAdd
                handleCancel={handleCancel}
                handleOk={handleOk}
                isModalOpen={isModalOpen}
                onChange={onChange}
                arrInput={[ // sửa
                    {
                        title: 'Mã nhân viên',
                        dataIndex: 'bul_employeeId',
                        key: 'bul_employeeId',
                    },
                   
                    {
                        title: 'Họ và Tên',
                        dataIndex: 'fullName',
                        key: 'fullName',
                    },
                    {
                        title: 'Địa chỉ',
                        dataIndex: 'address',
                        key: 'address',
                    },
                    {
                        title: 'Ngày tháng năm sinh',
                        dataIndex: 'birthDate',
                        key: 'birthDate',
                    },
                    {
                        title: 'Số điện thoại',
                        dataIndex: 'phone',
                        key: 'phone',
                    },
                    {
                        title: 'Vị trí công việc',
                        dataIndex: 'position',
                        key: 'position',
                    },
                ]}
            />
        </div>
    )
}

export default Buildingemployees