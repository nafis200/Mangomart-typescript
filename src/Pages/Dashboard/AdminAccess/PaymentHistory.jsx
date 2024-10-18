import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            // const res = await axiosSecure.get(`payments/${user.email}`)
            const res = await axiosPublic.get(`/payments`)
            return res.data;
        }
    })
    console.log('Payments:', payments);

    return (
        <div>
            <h2 className="text-xl md:text-2xl mt-16 mb-5 text-center"> Payments from all users in this site: <span className="bg-green-400">{payments.length}</span></h2>

            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Quantity</th>
                            {/* <th>Price</th> */}
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) =>
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>${payment.email}</td>
                                    <td>${payment.amount}</td>
                                    <td>{payment.quantity}</td>
                                    {/* <td>${payment.price}</td> */}
                                    <td>{payment.paymnetId}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;