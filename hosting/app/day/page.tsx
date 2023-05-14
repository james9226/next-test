

export default function ApplyPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const loanAmount = typeof searchParams.amount === "string" ? parseInt(searchParams.amount) : 0;

  return (
    <div>{loanAmount}</div>
  )

}
