import { useGetPostByIDQuery, useGetPostsQuery } from "../redux/features/apiTesting/baseAPI";

const DemoTestAPI = () => {
    const { data, isLoading } = useGetPostsQuery();
    const { data: post } = useGetPostByIDQuery(1);
    console.log(data);
    if (isLoading) {
        return <p>Posts Are Preparing</p>
    }
    return (
        <div>
            <h3 className="text-3xl font-bold text-red-500">RTK Query</h3>
            <h3 className="text-2xl font-bold">Getting posts from jsonplaceholder API</h3>
            {
                data.slice(0, 3).map((post) => <div key={post.id} className="my-6 mx-20 p-8 bg-slate-600 text-white rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 uppercase">{post?.title}</h3>
                    <p>{post?.body}</p>
                </div>)
            }
            <h3 className="text-2xl font-bold">Post By ID</h3>
            <div className="my-6 mx-20 p-8 bg-slate-600 text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-3 uppercase">{post?.title}</h3>
                <p>{post?.body}</p>
            </div>
        </div>
    );
};

export default DemoTestAPI;