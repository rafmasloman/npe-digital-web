import React, { useRef } from 'react';
import Button from '../Button';
import Gap from '../Gap';
import Input from '../Input';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';

const Form = () => {
  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_g3u1rb4',
        'template_2ty4yrb',
        form.current,
        'p0aXtevYxSNyapwIa',
      )
      .then(
        (result) => {
          console.log(result.text);
          router.push('/');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form
      className="bg-white rounded-2xl shadow-xl  absolute left-0 right-0 0 top-24 p-8"
      ref={form}
      onSubmit={sendEmail}
    >
      <h4 className="font-primary text-2xl font-medium">Konsultasi form</h4>
      <Gap height="h-50px" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-secondary">
        <Input
          name="fullname"
          placeholder="Masukkan Nama lengkap"
          forLabel="fullname"
          style="px-4 py-1.5 rounded-md"
          label="Nama Lengkap"
          width={64}
          type="input"
        />
        {/* <div className="form-input flex flex-col">
          <label>Layanan</label>
          <select className="bg-gray-input px-4 py-1.5 rounded-md">
            <option>Pilih layanan</option>
            <option>Mobile Apps</option>
            <option>Website</option>
          </select>
        </div> */}
        <Input
          name="services"
          forLabel="services"
          option={['Pilih layanan', 'Mobile', 'Website']}
          style="px-4 py-1.5 rounded-md"
          label="Layanan"
          width={64}
          type="select"
        />
        <Input
          name="email"
          placeholder="Masukkan Email "
          forLabel="email"
          style="px-4 py-1.5 rounded-md"
          label="Email"
          width={64}
          type="input"
        />
        <Input
          name="phoneNumber"
          placeholder="Masukkan No.HP "
          forLabel="phoneNumber"
          style="px-4 py-1.5 rounded-md"
          label="No. Hp"
          width={64}
          type="input"
        />
        <Input
          name="message"
          placeholder="Tulis pesan "
          forLabel="message"
          style="px-4 py-2.5 rounded-md h-24"
          label="Apa yang anda ingin konsultasikan?"
          width={64}
          span={2}
          type="message"
        />
        {/* <div className="form-input flex flex-col lg:col-span-2">
          <label>Pesan</label>
          <textarea
            name="message"
            className="h-24 bg-gray-input px-4 py-2.5 rounded-md "
            placeholder="Tulis pesan anda"
          ></textarea>
        </div> */}
        <div className="col-span-1 lg:col-span-2">
          <Button type="submit" color="primary" text="Kirim Pesan" />
        </div>
      </div>
    </form>
  );
};

export default Form;
