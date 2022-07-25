import * as React from "react";
interface Props {
  data: any;
}
const DestinationInfo = ({ data }: Props) => {
  console.log("data: ", data);
  return (
    <div className="airport">
      {data
        ? Object.keys(data).map((destination: any) => {
            return (
              <div>
                {Object.keys(destination).map((key: string) => {
                  return <div className="info"> {destination[key]} </div>;
                })}
              </div>
            );
          })
        : null}
    </div>
  );
};
export default DestinationInfo;
