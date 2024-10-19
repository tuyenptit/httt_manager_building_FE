import { useEffect, useState } from "react"
import { getListCompanies, addCompany, getServicesCompany } from "../api/company"  // sửa
import { Table, Button, Modal, Divider } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Company() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});
    const [dataServicesCompany, setDataServicesCompany] = useState();

    const loadData = async () => {
        const data = await getListCompanies()  // sửa
        setData(data)
    }

    const getServicesCompanyData = async (id) => {
        const data = await getServicesCompany(id)
        console.log("data", data)
        setDataServicesCompany(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        addCompany(body)  // sửa
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
            title: 'Diện tích sàn',
            dataIndex: 'officeArea',
            key: 'officeArea',
        },
        {
            title: 'SĐT liên hệ',
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
                    getServicesCompanyData(e.companyId)
                }
            }>Xem phí dịch vụ</button>,
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
                onClick
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
                        title: 'Diện tích sàn',
                        dataIndex: 'officeArea',
                        key: 'officeArea',
                    },
                    {
                        title: 'SĐT liên hệ',
                        dataIndex: 'phone',
                        key: 'phone',
                    },
                ]}
            />

            <Modal
                title="Phí dịch vụ toà nhà"
                open={dataServicesCompany}
                onCancel={() => setDataServicesCompany(undefined)}
            >
                <p>Phí cơ bản: {dataServicesCompany?.base}</p>
                <p>Phụ phí sàn: {dataServicesCompany?.priceOfficeSrise}</p>
                <p>Phụ phí nhân viên: {dataServicesCompany?.priceEmployeeSrise}</p>
                <Divider />
                <p>Tổng: {dataServicesCompany?.sumPrice}</p>
            </Modal>
        </div>
    )
}

export default Company