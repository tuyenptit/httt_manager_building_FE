import { Modal, Typography, Input, Row, Col } from 'antd'

function ModalAdd({ isModalOpen, handleOk, handleCancel, onChange, arrInput }) {
    return (
        <Modal
            title={ <Typography.Title level={3}>Thêm mới</Typography.Title>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
        >
            <Row gutter={16}>
                {
                    arrInput.map(input => (
                        <Col className="gutter-row" span={12} key={input.dataIndex}>
                            <Typography.Title level={5}>{input.title}</Typography.Title>
                            <Input
                                required
                                name={input.dataIndex}
                                onChange={onChange}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Modal>
    )
}

export default ModalAdd