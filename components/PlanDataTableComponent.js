import React, { useEffect } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';

export default function PlanDataTableComponent() {
    useEffect(() => {
        const addCustomClassToPagingButtons = () => {
            const buttons = document.querySelectorAll('.dt-paging-button');
            buttons.forEach((button) => {
                button.classList.add('btn', 'btn-outline-primary', 'mx-1'); // Add custom classes to paging buttons
            });

            const dataTableRowLayout = document.querySelectorAll('.dt-layout-row');
            dataTableRowLayout.forEach((rows) => {
                rows.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'my-4'); // Layout styling
            });

            const element1 = document.getElementById('dt-length-1');
            if (element1) {
                element1.classList.add('me-3'); // Add margin to length dropdown
            }

            const label = document.querySelector('label[for="dt-search-1"]');
            if (label) {
                label.classList.add('me-3', 'd-inline'); // Add styles to the search label
            }

            const searchInput = document.getElementById('dt-search-1');
            if (searchInput) {
                searchInput.classList.add('form-control', 'd-inline', 'rounded', 'shadow-sm'); // Style the search input
            }
        };

        const initializeDataTable = () => {
            if ($.fn.dataTable.isDataTable('#plansTable')) {
                const table = $('#plansTable').DataTable();
                table.destroy();
            }

            const table = new DataTable('#plansTable', {
                data: [
                    ['John Doe', '8530136842', 'john@example.com', '90 mins', '₹750', '2024-12-27',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Jane Smith', '9762735825', 'jane@example.com', '60 mins', '₹500', '2024-12-28',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Alice Johnson', '9730283864', 'alice@example.com', '30 mins', '₹250', '2024-12-29',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Michael Brown', '9123456789', 'michael@example.com', '120 mins', '₹1000', '2024-12-30',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Laura White', '8001234567', 'laura@example.com', '45 mins', '₹400', '2024-12-31',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Emily Green', '9012345678', 'emily@example.com', '75 mins', '₹600', '2025-01-01',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Sophia Gray', '8712345678', 'sophia@example.com', '60 mins', '₹500', '2025-01-02',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Daniel King', '8912345678', 'daniel@example.com', '90 mins', '₹750', '2025-01-03',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Olivia Clark', '8412345678', 'olivia@example.com', '120 mins', '₹1000', '2025-01-04',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Liam Hall', '8312345678', 'liam@example.com', '45 mins', '₹400', '2025-01-05',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Emma Scott', '8112345678', 'emma@example.com', '75 mins', '₹600', '2025-01-06',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                ],
                columns: [
                    { title: 'Name' },
                    { title: 'Phone Number' },
                    { title: 'Email' },
                    { title: 'Plan' },
                    { title: 'Amount Paid' },
                    { title: 'Payment Date' },
                    { title: 'Action', orderable: false }
                ]
            });

            addCustomClassToPagingButtons();

            $('#plansTable tbody').on('click', '.edit-btn', function () {
                const row = table.row($(this).closest('tr'));
                const rowData = row.data();
                if (rowData) {
                    alert(`Edit clicked for: ${rowData[0]}`);
                } else {
                    console.error('Row data not found for edit.');
                }
            });

            $('#plansTable tbody').on('click', '.delete-btn', function () {
                const row = table.row($(this).closest('tr'));
                const rowData = row.data();
                if (rowData) {
                    alert(`Delete clicked for: ${rowData[0]}`);
                } else {
                    console.error('Row data not found for delete.');
                }
            });
        };

        initializeDataTable();
    }, []);

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
            />
            <table id="plansTable" className="display table table-striped" style={{ width: '100%' }}></table>
        </div>
    );
}
