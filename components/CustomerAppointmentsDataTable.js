import React, { useEffect } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
// import 'datatables.net-dt/css/jquery.dataTables.css';

export default function CustomerAppointmentsDataTable() {
    useEffect(() => {
        const addCustomClassToPagingButtons = () => {
            const buttons = document.querySelectorAll('.dt-paging-button');
            buttons.forEach((button) => {
                button.classList.add('btn', 'btn-outline-primary', 'mx-1');
            });

            const dataTableRowLayout = document.querySelectorAll('.dt-layout-row');
            dataTableRowLayout.forEach((rows) => {
                rows.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'my-4');
            });

            const element1 = document.getElementById('dt-length-1');
            if (element1) {
                element1.classList.add('me-3');
            }

            const label = document.querySelector('label[for="dt-search-1"]');
            if (label) {
                label.classList.add('me-3', 'd-inline');
            }

            const searchInput = document.getElementById('dt-search-1');
            if (searchInput) {
                searchInput.classList.add('form-control', 'd-inline', 'rounded', 'shadow-sm');
            }
        };

        const initializeDataTable = () => {
            if ($.fn.dataTable.isDataTable('#appointmentsTable')) {
                const table = $('#appointmentsTable').DataTable();
                table.destroy();
            }

            new DataTable('#appointmentsTable', {
                data: [
                    ['Dr. John Smith', 'Cardiologist', '21-11-2024 10:00 AM', '30 min', '₹250', '<button class="btn btn-primary">Join Call</button>'],
                    ['Dr. Jane Doe', 'Dermatologist', '22-11-2024 2:00 PM', '60 min', '₹500', '<button class="btn btn-primary">Join Call</button>'],
                    ['Dr. Alice Brown', 'Neurologist', '23-11-2024 11:30 AM', '90 min', '₹750', '<button class="btn btn-primary">Join Call</button>'],
                    ['Dr. Bob White', 'Orthopedic', '24-11-2024 4:00 PM', '30 min', '₹250', '<button class="btn btn-primary">Join Call</button>'],
                    ['Dr. Sarah Green', 'Pediatrician', '25-11-2024 9:15 AM', '60 min', '₹500', '<button class="btn btn-primary">Join Call</button>']
                ],
                columns: [
                    { title: 'Consultant Name' },
                    { title: 'Specialty' },
                    { title: 'Date & Time' },
                    { title: 'Slot' },
                    { title: 'Payment' },
                    { title: 'Actions' }
                ]
            });

            addCustomClassToPagingButtons();
        };

        initializeDataTable();
    }, []);

    return (
        <div>
            <table id="appointmentsTable" className="display table table-striped" style={{ width: '100%' }}></table>
        </div>
    );
}
