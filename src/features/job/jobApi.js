import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobs"],
    }),
    applyJob: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
    }),
    askQuestion: builder.mutation({
      query: (question) => ({
        url: "/query",
        method: "PATCH",
        body: question,
      }),
    }),
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
    getAppliedJobsById: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
  }),
});
export const {
  usePostJobMutation,
  useApplyJobMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useGetAppliedJobsByIdQuery,
  useAskQuestionMutation,
} = jobApi;
