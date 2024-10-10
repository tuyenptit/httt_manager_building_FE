import { useEffect, useState } from "react"
import { getListservice_usage, addservice_usage } from "../api/service_usage"  // sửa
import { Table, Button } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Service_usage() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});

    const loadData = async () => {
        const data = await getListservice_usage()  // sửa
        setData(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        addservice_usage(body)  // sửa
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
            title: 'Mã công ty',
            dataIndex: 'companyId',
            key: 'companyId',
        },
        {
            title: 'Mã dịch vụ',
            dataIndex: 'serviceId',
            key: 'serviceId',
        },
        {
            title: 'Bắt buộc hay không',
            dataIndex: 'isMandatory',
            key: 'isMandatory',
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'registrationDate',
            key: 'registrationDate',
        },
        {
            title: 'Số ngày sử dụng',
            dataIndex: 'daysUsed',
            key: 'daysUsed',
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
                        title: 'Mã công ty',
                        dataIndex: 'ompanyId',
                        key: 'ompanyId',
                    },
                    {
                        title: 'Mã dịch vụ',
                        dataIndex: 'serviceId',
                        key: 'serviceId',
                    },
                    {
                        title: 'Bắt buộc hay không',
                        dataIndex: 'isMandatory',
                        key: 'isMandatory',
                    },
                    {
                        title: 'Ngày đăng ký',
                        dataIndex: 'registrationDate',
                        key: 'registrationDate',
                    },
                    {
                        title: 'Số ngày sử dụng',
                        dataIndex: 'daysUsed',
                        key: 'daysUsed',
                    },
                ]}
            />
        </div>
    )
}

export default Service_usage