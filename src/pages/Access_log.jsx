import { useEffect, useState } from "react"
import { getListaccess_log, addaccess_log } from "../api/access_log"  // sửa
import { Table, Button } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Access_log() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});

    const loadData = async () => {
        const data = await getListaccess_log()  // sửa
        setData(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        addaccess_log(body)  // sửa
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
            title: 'Thời gian ra/vào',
            dataIndex: 'accessTime',
            key: 'accessTime',
        },
        {
            title: 'Vị trí',
            dataIndex: 'accessLocation',
            key: 'accessLocation',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'accessType',
            key: 'accessType',
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
                    // {
                    //     title: 'Tên công ty',
                    //     dataIndex: 'companyName',
                    //     key: 'companyName',
                    // },
                    // {
                    //     title: 'Mã công ty',
                    //     dataIndex: 'companyId',
                    //     key: 'companyId',
                    // },
                    // {
                    //     title: 'Mã só thuế',
                    //     dataIndex: 'taxId',
                    //     key: 'taxId',
                    // },
                    // {
                    //     title: 'fieldOfActivity',
                    //     dataIndex: 'fieldOfActivity',
                    //     key: 'fieldOfActivity',
                    // },
                    // {
                    //     title: 'numberOfEmployees',
                    //     dataIndex: 'numberOfEmployees',
                    //     key: 'numberOfEmployees',
                    // },
                    // {
                    //     title: 'officeAddress',
                    //     dataIndex: 'officeAddress',
                    //     key: 'officeAddress',
                    // },
                    // {
                    //     title: 'Diện tích sàn',
                    //     dataIndex: 'officeArea',
                    //     key: 'officeArea',
                    // },
                    // {
                    //     title: 'SĐT liên hệ',
                    //     dataIndex: 'phone',
                    //     key: 'phone',
                    // },
                ]}
            />
        </div>
    )
}

export default Access_log