import { useEffect, useState } from "react"
import { getList, add, getInOut } from "../api/employees"  // sửa
import { Table, Button, Modal, Divider } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Employees() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});
    const [dataInOut, setDataInOut] = useState()

    const loadData = async () => {
        const data = await getList()  // sửa
        setData(data)
    }

    const getInOutData = async (id) => {
        const data = await getInOut(id)
        console.log("data", data)
        setDataInOut(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        add(body)  // sửa
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
            dataIndex: 'employeeId',
            key: 'employeeId',
        },
        {
            title: 'Mã công ty',
            dataIndex: 'companyId',
            key: 'companyId',
        },
        {
            title: 'Họ và Tên',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Số CCCD',
            dataIndex: 'idCard',
            key: 'idCard',
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
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (e) => <button onClick={
                () => {
                    getInOutData(e.employeeId)
                }
            }>Ra/vào</button>,
        },
    ]
    
    const columnsInOut = [
        {
            title: 'Ngày',
            dataIndex: 'accessTime',
            key: 'accessTime',
        },
        {
            title: 'Loại',
            dataIndex: 'accessType',
            key: 'accessType',
        },
        {
            title: 'Vị trí',
            dataIndex: 'accessLocation',
            key: 'accessLocation',
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
                        title: 'Tên công ty',
                        dataIndex: 'companyName',
                        key: 'companyName',
                    },
                    {
                        title: 'Mã công ty',
                        dataIndex: 'companyId',
                        key: 'companyId',
                    },
                    {
                        title: 'Mã só thuế',
                        dataIndex: 'taxId',
                        key: 'taxId',
                    },
                    {
                        title: 'fieldOfActivity',
                        dataIndex: 'fieldOfActivity',
                        key: 'fieldOfActivity',
                    },
                    {
                        title: 'numberOfEmployees',
                        dataIndex: 'numberOfEmployees',
                        key: 'numberOfEmployees',
                    },
                    {
                        title: 'officeAddress',
                        dataIndex: 'officeAddress',
                        key: 'officeAddress',
                    },
                    {
                        title: 'Số điện thoại',
                        dataIndex: 'officeArea',
                        key: 'phone',
                    },
                ]}
            />

            <Modal
                title="Ra/vào toà nhà"
                open={dataInOut}
                onCancel={() => setDataInOut(undefined)}
                onOk={() => setDataInOut(undefined)}
            >
                <Table
                    dataSource={dataInOut}
                    columns={columnsInOut}
                    pagination={false}
                    bordered
                />
            </Modal>
        </div>
    )
}

export default Employees