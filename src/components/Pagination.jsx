import Link from "next/link";

export default function Pagination({ currentPage, totalPages, basePath }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center items-center gap-4 py-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Link
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2
"
          key={p}
          href={`${basePath}?page=${p}`}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          href={`${basePath}?page=${currentPage + 1}`}
        >
          Næste
        </Link>
      ) : (
        <span className="text-white/30 cursor-not-allowed">Næste</span>
      )}
    </nav>
  );
}
