import { useEffect, useState } from "react"
import { getListbuilding_employees, addbuilding_employees, getSalary } from "../api/building_employees"  // sửa
import { Table, Button, Modal, Divider } from 'antd'
import ModalAdd from "../components/ModalAdd"

function Buildingemployees() {
    const [data, setData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [body, setBody] = useState({});
    const [dataSalary, setDataSalary] = useState()

    console.log("dataSalary", dataSalary)

    const loadData = async () => {
        const data = await getListbuilding_employees()  // sửa
        setData(data)
    }

    const getSalaryData = async (id) => {
        const data = await getSalary(id)
        console.log("data", data)
        setDataSalary(data)
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
        setBody({ ...body, [e.target.name]: e.target.value })
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
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (e) => <button onClick={
                () => {
                    getSalaryData(e.bul_employeeId)
                }
            }>Xem phiếu lương</button>,
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

            <Modal
                title="Phí dịch vụ toà nhà"
                open={dataSalary}
                onCancel={() => setDataSalary(undefined)}
                onOk={() => setDataSalary(undefined)}
            >
                <p>Lương cơ bản: {dataSalary?.base}</p>
                <p>Lương hoa hồng: {dataSalary?.hoaHongLuowng}</p>
                <Divider />
                <p>Tổng: {dataSalary?.sum}</p>
            </Modal>
        </div>
    )
}

export default Buildingemployees