import React, { useEffect } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';

export default function CustomerTransaction() {

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
                    ['John Doe', 'Cardiologist', '2024-12-26 10:00 AM', '90 mins', '₹750', '2024-12-27',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Jane Smith', 'Dermatologist', '2024-12-27 2:00 PM', '60 mins', '₹500', '2024-12-28',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Alice Johnson', 'Neurologist', '2024-12-28 11:30 AM', '30 mins', '₹250', '2024-12-29',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Michael Brown', 'Orthopedic', '2024-12-29 9:15 AM', '120 mins', '₹1000', '2024-12-30',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                    ['Laura White', 'Pediatrician', '2024-12-30 4:00 PM', '45 mins', '₹400', '2024-12-31',
                        `<button class="btn btn-outline-primary btn-sm mx-1 edit-btn my-2">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-btn my-2">
                            <i class="bi bi-trash"></i>
                        </button>`],
                ],
                columns: [
                    { title: 'Name' },
                    { title: 'Speciality' },
                    { title: 'Date & Time' },
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
  )
}
