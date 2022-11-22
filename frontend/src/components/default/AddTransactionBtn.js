import AddIcon from "../../assets/images/+ New Invoices.png";
const AddTransactionBtn = (props) => {
  const { openAddReportModalHandler } = props;
  return (
    <div onClick={openAddReportModalHandler} className="add-budget">
      <p></p>
      <img src={AddIcon} alt="" />
    </div>
  );
};

export default AddTransactionBtn;
