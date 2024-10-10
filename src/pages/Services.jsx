import { useEffect, useState } from "react"
import { getListservices, addservices } from "../api/services"  // sửa
import { Table, Button } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Services() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});

    const loadData = async () => {
        const data = await getListservices()  // sửa
        setData(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        addservices(body)  // sửa
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
            title: 'Mã dịch vụ',
            dataIndex: 'serviceId',
            key: 'serviceId',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'serviceName',
            key: 'serviceName',
        },
        {
            title: 'Loại dịch vụ',
            dataIndex: 'serviceType',
            key: 'serviceType',
        },
        {
            title: 'Đơn giá',
            dataIndex: 'basePrice',
            key: 'basePrice',
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
                        title: 'Mã dịch vụ',
                        dataIndex: 'serviceId',
                        key: 'serviceId',
                    },
                    {
                        title: 'Tên dịch vụ',
                        dataIndex: 'serviceName',
                        key: 'serviceName',
                    },
                    {
                        title: 'Loại dịch vụ',
                        dataIndex: 'serviceType',
                        key: 'serviceType',
                    },
                    {
                        title: 'Đơn giá',
                        dataIndex: 'basePrice',
                        key: 'basePrice',
                    },
                ]}
            />
        </div>
    )
}

export default Services