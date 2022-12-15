import { notification } from "antd";
import { InfoCircleOutlined, FrownOutlined, SmileOutlined, WarningOutlined } from '@ant-design/icons';

export const NOTIF_TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};
const color = (type: string) => {
  switch (type) {
    case NOTIF_TYPE.INFO:
      return "amber-400";
    case NOTIF_TYPE.SUCCESS:
      return "amber-500";
    case NOTIF_TYPE.WARNING:
      return "amber-700";
    case NOTIF_TYPE.ERROR:
      return "rose-800";
    default:
      break;
  }
}
const showIcon = (type: string) => {
  switch (type) {
    case NOTIF_TYPE.INFO:
      return <InfoCircleOutlined className={`text-${color(type)}`} />;
    case NOTIF_TYPE.SUCCESS:
      return <SmileOutlined className={`text-${color(type)}`} />;
    case NOTIF_TYPE.WARNING:
      return <WarningOutlined className={`text-${color(type)}`} />;
    case NOTIF_TYPE.ERROR:
      return <FrownOutlined className={`text-${color(type)}`} />;
    default:
      break;
  }
}
export const openNotification = (
  type = "info",
  message = "",
  description = ""
) => {
  notification.open({
    message: <p className={`font-medium text-${color(type)} py-1.5`}>{message}</p>,
    description: <p className={`text-${color(type)}`}>{description}</p>,
    icon: showIcon(type),
    className: `p-2 border rounded-2xl bg-yellow-50 border-${color(type)}`,
    closeIcon: <></>
  });
};
